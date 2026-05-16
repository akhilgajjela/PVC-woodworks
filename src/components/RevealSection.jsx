import { useReveal } from "../hooks/useReveal.js";

export default function RevealSection({ children, className = "", as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
