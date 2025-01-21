import { query } from "../../db/db";

export default async function handler(req: any, res: any) {
  try {
    const result = await query("SELECT * FROM sample_users");
    console.log("result", result);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
