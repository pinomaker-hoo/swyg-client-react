import { saveQuiz } from "../../api/quiz"

export default function MakeQuiz() {
  const onSave = async () => {
    const res = await saveQuiz("나는 배가 고픈가?", true)
    console.log(res)
  }
  return (
    <div>
      <button onClick={onSave}>CLICK</button>
    </div>
  )
}
