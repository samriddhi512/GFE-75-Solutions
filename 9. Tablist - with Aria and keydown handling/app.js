import { useState, useRef, useEffect } from "react";

export default function Tabs({ defSelected, itemlist }) {
  const [active, setActive] = useState(defSelected);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowRight") {
      setActive((idx + 1) % itemlist.length);
      e.preventDefault();
    }

    if (e.key === "ArrowLeft") {
      setActive((idx - 1 + itemlist.length) % itemlist.length);
      e.preventDefault();
    }
  };

  useEffect(() => {
    tabRefs.current[active]?.focus();
  }, [active]);

  return (
    <div className="tabs">
      <div role="tablist" className="tablist">
        {itemlist.map((item, idx) => {
          return (
            <button
              className={idx === active ? "active btn" : "btn"}
              aria-selected={idx === active}
              aria-controls={`panel-${idx}`}
              id={`tab-${idx}`}
              tabIndex={idx === active ? 0 : -1}
              role="tab"
              key={idx}
              onClick={() => setActive(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => {
                tabRefs.current[idx] = el; 
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        className="tab-content"
        aria-labelledby={`tab-${active}`}
        id={`panel-${active}`}
      >
        {itemlist[active].content}
      </div>
    </div>
  );
}

// DO this!
// default selected tab and itemlist take as props to make it generic
