import { useEffect, useRef } from "react";
import Grid from "tui-grid";
import "tui-grid/dist/tui-grid.css";
import BootStrapModal from "./components/BootStrapModal";
import OffCanvas from "./components/OffCanvas";

function App2() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("gridData")) {
      const mockData = [
        { name: "홍길동", age: 29, job: "개발자", address: "서울" },
        { name: "김철수", age: 35, job: "디자이너", address: "대구" },
        { name: "이영희", age: 42, job: "기획자", address: "인천" },
        { name: "박영수", age: 31, job: "마케터", address: "부산" }
      ];
      localStorage.setItem("gridData", JSON.stringify(mockData));
    }

    const savedData = JSON.parse(localStorage.getItem("gridData")) || [];

    const grid = new Grid({
      el: gridRef.current,
      scrollX: false,
      scrollY: false,
      bodyHeight: 300,
      columns: [
        { header: "이름", name: "name", sortingType: "desc", sortable: true },
        { header: "나이", name: "age", sortingType: "desc", sortable: true },
        { header: "직업", name: "job" },
        { header: "주소", name: "address" },
      ],
      data: savedData,
    });

    return () => grid.destroy();
  }, []);

  return (
    <div className="p-10">
      {/* 상단 영역 */}
      <div className="w-full flex justify-between items-center mb-3">
        <OffCanvas buttonLabel="☰" title="사이드 메뉴" />
        <h1 className="text-xl font-bold">회원 목록 2</h1>
        <BootStrapModal buttonLabel="회원정보입력" />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="w-full h-[400px] border rounded-lg shadow-lg bg-white"
      />
    </div>
  );
}

export default App2;
