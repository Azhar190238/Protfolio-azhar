import { useEffect, useState } from "react";

const CursorEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[99999] select-none transition-all duration-100 ease-linear ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y + 25}px`, 
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="relative bg-gray-300 text-[#085bc0] font-semibold text-sm px-3 py-1.5 rounded-2xl shadow-md"
        style={{
          boxShadow:
            "0 2px 8px rgba(7,121,244,0.3), 0 0 12px rgba(7,121,244,0.2)",
        }}
      >
        AZHAR
        
        <div
          className="absolute left-1/2 -top-[5px] -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: "5px solid #0779F4",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CursorEffect;
