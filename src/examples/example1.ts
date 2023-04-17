import * as mysql from "mysql2";

export class Example1 {
    protected sql: mysql.Connection;

    // 設置連接MySQL的config.
    protected init() {
      this.sql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'demo',
        port: 3306
      });
    }

    // 建立資料 (Create).
    create() {
      /*
         基本的新增SQL語法如下，但是我們可以換一個更安全一點的寫法，比方說去檢查有沒有這個人在決定是否新增.
         var add_content = 'INSERT INTO user(`id`,`name`,`desc`) VALUES(0,?,?)';
      */
      var  add_content = "INSERT INTO user(`id`,`name`,`desc`) \
                          SELECT 0,?,? FROM DUAL \
                          WHERE NOT EXISTS \
                          (SELECT name FROM user WHERE name='test' LIMIT 1)";
      var  add_params = ['test', '測試用'];
      this.sql.query(add_content, add_params, function (err: any, result: any) {
        if(err){
          console.log('[INSERT ERROR] - ', err.message);
          return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.dir('INSERT ID:',result); 
      });
    }

    // 讀取資料 (Read).
    read() {
      const query_content: string = "SELECT * FROM user";
      this.sql.query(query_content, function (err: any, result: any) {
        if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.dir(result);
      });
    }

    // 更新資料 (Update).
    update() {
      var update_content = "UPDATE user SET `name` = ?,`desc` = ? WHERE `name` = ?";
      var update_params = ['test99', '真的是測試用', `test`];
      this.sql.query(update_content, update_params, function (err: any, result: any) {
          if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
          }        
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.dir(result);
      });
    }

    //  刪除資料 (Delete).
    delete() {
      var delete_content = "DELETE FROM user where name='test99'";
      this.sql.query(delete_content, function (err: any, result: any) {
          if(err){
                console.log('[DELETE ERROR] - ',err.message);
                return;
          }        
        console.log('--------------------------DELETE----------------------------');
        console.dir('DELETE affectedRows',result.affectedRows);
      });
    }

    run () {
      try {
        // 設置並連接SQL.
        this.init();
        // 連線SQL並且進行操作.
        this.sql.connect();
        // 創建資料表.
        this.create();
        // 更新資料.
        this.update();
        // 刪除資料.
        this.delete();
        // 當操作進行完之後，記得要關閉連線.
        this.sql.end();
        
      } catch(err) {
        console.log(err);
      }
    }
}