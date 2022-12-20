const express = require("express");
const app = express();
const ejs = require("ejs");

// 포켓몬 페이지(pocketmon.ejs)
/*app.get("/pocketmon", (요청, 응답) => {
  // pocketmon.ejs로 포켓몬 데이터 표시 (반복문)
  // ejs 템플릿 코드 (자바스크립트 활용 )
});*/

// pocketmons 불러오기
const poketmons = require("./poketmons");
// index.js 랑 불러오는 파일이랑 경로가 같아야함 ./
console.log(poketmons);

// post 요청시 필요
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", function (요청, 응답) {
  응답.render("pages/index.ejs", { posts });
});

// about
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

// poketmons
app.get("/poketmons", function (req, res) {
  res.render("pages/poketmons.ejs", {
    title: "포켓몬 도감",
    poketmons: poketmons,
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
