interface List {
  id: number
  name: string
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
  })
}

const result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ],
}
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ],
} as Result)

interface Names {
  // [x: string]: number | boolean | string
  // y: boolean; // 会报错 boolean 不会赋值给字符串索引类型，因为字符串索引签名的类型是 number | string，所以之后再定义的属性必须是签名值类型的子类型
  [z: number]: number // 字符串索引签名后也能定义数字索引签名，数字索引的返回值必须是字符串索引返回值类型的子类型
}

const names: Names = {
  // a: true,
  // b: 'bbb',
  1: 1,
}
console.log(names)
