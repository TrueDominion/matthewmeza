/** Divider made of truss nodes on a hairline (brand UI component). */
export function NodeDivider({ nodes = 5 }: { nodes?: number }) {
  return (
    <div className="node-divider" aria-hidden="true">
      {Array.from({ length: nodes }, (_, i) => (
        <span key={i} className="node-divider__node" />
      ))}
    </div>
  );
}
