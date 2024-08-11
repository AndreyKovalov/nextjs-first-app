export default interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}
