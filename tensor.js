const fs = require('fs');

// 파일 경로
const filePath = 'data.json';

// 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("파일을 읽는 도중 오류가 발생했습니다:", err);
        return;
    }

    // JSON 파싱
    const jsonData = JSON.parse(data);

    // 필요한 정보 추출
    const orgImagePath = jsonData.info.org_path;
    const sketchImagePath = jsonData.sketch_info.img_path;
    const description = jsonData.description;

    // 추출된 정보 확인
    console.log("Original Image Path:", orgImagePath);
    console.log("Sketch Image Path:", sketchImagePath);
    console.log("Description:", description);
});
