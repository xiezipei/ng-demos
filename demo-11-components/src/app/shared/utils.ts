export const COLORS: string[] = ['red', 'green'];

/**
 * 打印信息
 * @param msg 信息
 */
export function log(msg: string, colorIndex: number) {
  const color = COLORS[colorIndex];
  console.log(
    `%c ${msg}`,
    `background:${color}; color: white; padding: 2px 2px 2px 2px;`
  );
}
