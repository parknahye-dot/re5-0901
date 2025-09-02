import { useEffect, useRef } from "react";
import Grid from "tui-grid";
import "tui-grid/dist/tui-grid.css"; // ✅ TUI Grid CSS import

function App() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = new Grid({
      el: gridRef.current,
      scrollX: false,
      scrollY: false,
      columns: [
        {
          header: "이름", name: "name", sortingType: 'desc',
          sortable: true
        },
        {
          header: "나이", name: "age", sortingType: 'desc',
          sortable: true
        },
        { header: "직업", name: "job" },
        { header: "주소", name: "address" },
      ],
      data: [
        { name: "홍길동", age: 29, job: "개발자", address: "서울" },
        { name: "김철수", age: 35, job: "디자이너", address: "대구" },
        { name: "이영희", age: 42, job: "기획자", address: "인천" },
        { name: "이영희", age: 42, job: "기획자", address: "인천" }
      ],
    });

    return () => grid.destroy(); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <div ref={gridRef} className="w-full max-w-4xl border rounded-lg shadow-lg" />
    </div>
  );
}

export default App;
