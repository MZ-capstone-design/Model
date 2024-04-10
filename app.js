const express = require('express');
const fs = require('fs');
const app = express();

// Express에 필요한 미들웨어 및 라우터 등록
app.use(express.json());

// 모델 학습 함수
function trainModel(data) {
    // 모델 학습 로직을 구현
    console.log("모델 학습을 시작합니다.");
    console.log("학습 데이터:", data);

    // 데이터를 이용한 모델 학습
    // 신경망 모델을 초기화하고 학습 데이터로 학습을 수행
}

// POST 요청을 처리하는 라우터
app.post('/train', (req, res) => {
    // data.json 파일을 읽어와서 JSON 형태로 파싱
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error("파일을 읽는 도중 오류가 발생했습니다.", err);
            return res.status(500).send("파일을 읽는 도중 오류가 발생했습니다.");
        }

        // JSON 형태로 파싱된 데이터를 trainModel 함수로 전달하여 모델 학습을 시작
        trainModel(JSON.parse(data));

        // 응답 전송
        res.status(200).send("모델 학습이 성공적으로 시작되었습니다.");
    });
});

// 서버 구동
const port = 3000;
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
