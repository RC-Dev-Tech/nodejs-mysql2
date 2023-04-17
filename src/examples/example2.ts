import { createPool } from 'mysql2/promise';

// 創建連接池.
const sqlPool = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "demo",
  port: 3306,
  connectionLimit: 10     // 連線限制10
});

export class Example2 {
  // 執行 CRUD 操作.
  async run() {
    try {
      // 取得連線.
      const connection = await sqlPool.getConnection();

      // 插入一筆數據.
      var insert_id;
      const insertResult: any = await connection.query(
        "INSERT INTO user SET ?",
        { name: "test", desc: "測試帳號" }
      );
      console.log("Insert result:", insertResult[0]);
      insert_id = insertResult[0].insertId;

      // 更新一筆數據.
      const updateResult = await connection.query(
        "UPDATE user SET ? WHERE id = ?",
        [{ desc: "更新測試帳號" }, insert_id]
      );
      console.log("insertResult.insertId:", insert_id);
      console.log("Update result:", updateResult[0]);

      // 查詢數據.
      const selectResult = await connection.query(
        "SELECT * FROM user WHERE name = ?",
        ["test"]
      );
      console.log("insertResult.insertId:", insert_id);
      console.log("Select result:", selectResult[0]);

      // 刪除數據.
      const deleteResult = await connection.query(
        "DELETE FROM user WHERE id = ?",
        [insertResult.insertId]
      );
      console.log("insertResult.insertId:", insert_id);
      console.log("Delete result:", deleteResult[0]);

      // 釋放連線.
      connection.release();

      // 關閉連接池.
      await sqlPool.end();
    } catch (err) {
      console.error(err);
    }
  }
}
