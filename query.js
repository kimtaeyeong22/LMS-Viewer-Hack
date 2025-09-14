fetch("/ilos/st/course/online_view_at.acl", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: new URLSearchParams({
    lecture_weeks: "",
    item_id: "",
    link_seq: "",
    his_no: "",
    ky: "",
    ud: "",
    trigger_yn: "",
    interval_time: "9999",  // 영상 전체 길이보다 크게
    returnData: "json",
    encoding: "utf-8"
  })
})
.then(response => response.json())
.then(res => console.log("완료 처리 응답:", res))
.catch(err => console.error("오류 발생:", err));