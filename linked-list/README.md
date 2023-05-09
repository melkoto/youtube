# Linked List

## Разница между массивом и однонаправленным связным списком

**Массив**:

* Время доступа к элементу: `O(1)`
* Время вставки в начало: `O(n)`
* Время вставки в конец: `O(1)`
* Время удаления: `O(n)` при удалении элемента из массива, `O(1)` при удалении последнего элемента
* Память: выделяется непрерывный блок памяти для всех элементов, размер массива фиксирован при создании.

**Однонаправленный связный список**:

* Время доступа к элементу: `O(n)`
* Время вставки в начало: `O(1)`
* Время вставки в конец: `O(n)`
* Время удаления: `O(1)` при удалении первого элемента, `O(n)` при удалении элемента из середины или конца списка
* Память: выделяется отдельный блок памяти для каждого элемента, размер списка может меняться динамически.

## Связный список в JS
Представьте, что у нас есть 3 объекта `node1`, `node2` и `node3`:

```JS
const node1 = {
    val: 1,
    next: null
}

const node2 = {
    val: 2,
    next: null
}

const node3 = {
    val: 3,
    next: null
}

```

Если `node1.next` указать на объект `node2`, то у нас получится СВЯЗНЫЙ СПИСОК:

```JS
const linkedList = node1

node1.next = node2
node2.next = node3
```

В коде выше мы создали переменную `linkedList`, которая равна `node1` (`node1` - начало связного списка). Далее
в `node1.next` указали ссылку на объект `node2`. Почему ссылку? В JS переменная `node1` (node2, node3) хранит в себе не
сам объект, а ссылку на память, где хранится объект. Если сделать `console.log(linkedList)`, то мы получим:

```JS
// {val: 1, next: {val: 2, next: {val: 3, next: null}}}
```

Если `next` указывает на `null`, то это конец связного списка.   
Для того чтобы создавать объекты (ноды) связного списка, мы добавим класс `Node`:

```JS
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
```

Теперь давайте создадим 3 объекта `node1`, `node2` и `node3` используя класс `Node`:

```JS
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2
node2.next = node3

const linkedList = node1
console.log(linkedList) // {val: 1, next: {val: 2, next: {val: 3, next: null}}}
```

## Методы
**Изучите файл linkedList.js**.  

Добавим в связный список `head`, `tail` и `size`, чтобы за константное время могли получить длину, начало и конец связного списка.   
Давайте разберем методы, которые помогут лучше понимать связный список. Добавляя, удаляя ноды в связном списке, мы **всегда будем обновлять`head`, `tail` и `size`**.

### Add first
В этом методе нам нужно добавить новую ноду в начало связного списка. Например:
```JS
const node1 = new Node(1) // node1 = {val: 1, next: null}
const node2 = new Node(2) // node2 = {val: 2, next: null}
const node3 = new Node(3) // node3 = {val: 3, next: null}

node1.next = node2
node2.next = node3

console.log(node1) // {val: 1, next: {val: 2, next: {val: 3, next: null}}}
```

Так как все объекты выше идут от `node1`, `node1` - начало связного списка. Чтобы добавить новый объект в `{val: 1, next: {val: 2, next: {val: 3, next: null}}}`, ном просто нужно указать ссылку `next` нового объекта на `node1`.
```JS
const newNode = new Node(10);
newNode.next = node1
console.log(newNode) // {val: 10, next: {val: 1, next: {val: 2, next: {val: 3, next: null}}}}
```

Можно и так:
```JS
const newNode = new Node(10, node1);
console.log(newNode) // {val: 10, next: {val: 1, next: {val: 2, next: {val: 3, next: null}}}}
```

Напишите метод `addFirst` в файле `linkedList` и запустите в терминале проверку на этот метод через команду:
`npm run test -- -t 'addFirst()'`. Решение сможете найти в `solution/index.js`.

**Алгоритм:**   
Проверьте, что связный список не пустой.
  * если пустой, то `head` и `tail` будут указывать на новую ноду.
  * если не пустой, то `next` новой ноды будет указывать на `head`. Не забудьте обновить ссылку на `head`

```Typescript
function addFirst(node: Node): void {}
```

![add-first](animation/add-first.gif)
___

### Add last

```Typescript
function addLst(node: Node): void {
}
```

![add-last](animation/add-last.gif)
___

### Add node at index

```Typescript
function addAt(index: number, node: Node): void {
}
```

![!addAt](animation/addAt.gif)
___

### Remove first

```Typescript
function removeFirst(): void {
}
```

![!remove-first](animation/remove-first.gif)
___

### Remove last

```Typescript
function removeLast(): void {
}
```

![remove-last](animation/remove-last.gif)
___

### Remove at index

```Typescript
function removeAt(index: number): void {
}
```

![remove-at](animation/remove-at.gif)
___

### Get at index

```Typescript
function getAt(index: number): Node {
}
```

![get-at](animation/get-at.gif)
