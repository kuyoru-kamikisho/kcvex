/**
 * 生成随机字符串
 */
export function genHash(len: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        hash += chars[randomIndex];
    }
    return hash;
}