import { supabase } from '../../lib/initSupabase'

const getUniversity = async (req, res) => {
    const { data: university, error } = await supabase.from("university").select()

    console.log(university)

    if (error) return res.status(400).json({ error: error.message })
    return res.status(200).json(university)
}

export default getUniversity
