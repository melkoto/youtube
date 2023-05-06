# Linked List

## Разница между массивом и однонаправленным связным списком
**Массив**:
* Время доступа к элементу: O(1)
* Время вставки в конец: O(1)
* Время вставки в начало или середину: O(n)
* Время удаления: O(n)
* Память: выделяется непрерывный блок памяти для всех элементов, размер массива фиксирован при создании.

**Однонаправленный связный список**:
* Время доступа к элементу: O(n)
* Время вставки в начало и конец: O(1)
* Время вставки в конец: O(n)
* Время удаления: O(1) при удалении первого элемента, O(n) при удалении элемента из середины списка
* Память: выделяется отдельный блок памяти для каждого элемента, размер списка может меняться динамически.

## Хранение массива и связного списка в памяти
Картинки ниже взяты на сайте [levelup.gitconnected.com](levelup.gitconnected.com) из статьи [Array vs Linked List Data Structures](https://levelup.gitconnected.com/array-vs-linked-list-data-structure-c5c0ff405f16)

### Массив
![array](readme-assets/array.jpeg)   

### Связный список
![ssl](readme-assets/sll.jpeg)

### Добавление в массив
![addArr1](readme-assets/add-to-arr-1.jpeg)

Если добавить 8 в конец массива, где следующая ячейка занята
![aaArr-2](readme-assets/save-to-arr-2.jpeg)
![aaArr-3](readme-assets/save-to-arr-3.jpeg)



```JS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## Методы
### Add first
```Typescript
function addFirst(node: Node): void {}
```
![add-first](animation/add-first.gif)
___

### Add last
```Typescript
function addLst(node: Node): void {}
```
![add-last](animation/add-last.gif)
___

### Add node at index
```Typescript
function addAt(index: number, node: Node): void {}
```
![!addAt](animation/addAt.gif)
___

### Remove first
```Typescript
function removeFirst(): void {}
```
![!remove-first](animation/remove-first.gif)
___

### Remove last

```Typescript
function removeLast(): void {}
```
![remove-last](animation/remove-last.gif)
___

### Remove at index
```Typescript
function removeAt(index: number): void {}
```
![remove-at](animation/remove-at.gif)
___

### Get at index
```Typescript
function getAt(index: number): Node {}
```
![get-at](animation/get-at.gif)

## Links
* [Array vs Linked List Data Structures](https://levelup.gitconnected.com/array-vs-linked-list-data-structure-c5c0ff405f16)
