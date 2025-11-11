"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AdminUpload() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [beforeFile, setBeforeFile] = useState(null)
    const [afterFile, setAfterFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleUpload = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            if (!title || !description || !beforeFile || !afterFile) {
                throw new Error("Please fill all fields and choose images.")
            }

            // Upload BEFORE image
            const beforePath = `before/${Date.now()}_${beforeFile.name}`
            const { data: beforeData, error: beforeError } = await supabase.storage
                .from("projects") // your bucket name
                .upload(beforePath, beforeFile, { upsert: true })

            if (beforeError) throw beforeError

            const { data: beforePublic } = supabase.storage
                .from("projects")
                .getPublicUrl(beforeData.path)

            // Upload AFTER image
            const afterPath = `after/${Date.now()}_${afterFile.name}`
            const { data: afterData, error: afterError } = await supabase.storage
                .from("projects")
                .upload(afterPath, afterFile, { upsert: true })

            if (afterError) throw afterError

            const { data: afterPublic } = supabase.storage
                .from("projects")
                .getPublicUrl(afterData.path)

            // Insert into database
            const { error: insertError } = await supabase.from("projects").insert([
                {
                    title,
                    description,
                    before_url: beforePublic.publicUrl,
                    after_url: afterPublic.publicUrl,
                },
            ])

            if (insertError) throw insertError

            setMessage("✅ Project uploaded successfully!")
            setTitle("")
            setDescription("")
            setBeforeFile(null)
            setAfterFile(null)
        } catch (err) {
            console.error("Error:", err)
            setMessage(`❌ Upload failed: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
                <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
                    Admin Project Upload
                </h2>

                <form onSubmit={handleUpload} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                        rows={4}
                    />

                    <div>
                        <label className="block font-medium mb-1">Before Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setBeforeFile(e.target.files[0])}
                            className="w-full text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">After Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAfterFile(e.target.files[0])}
                            className="w-full text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition disabled:opacity-60"
                    >
                        {loading ? "Uploading..." : "Upload Project"}
                    </button>

                    {message && (
                        <p
                            className={`text-center mt-3 ${message.startsWith("✅") ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
