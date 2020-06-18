interface DecompressLzwResult {
  data: DataView;
  length: number;
}

export function decompressLzw(
  stripData: DataView,
  length: number,
): DecompressLzwResult {
  const array = new Uint8Array(stripData.buffer, stripData.byteOffset, length);
  // TODO: implement it!
  return { data: stripData, length };
}
