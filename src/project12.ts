//generic class

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  } // splice(from,how many things I would pick, what I want to put in the array), indexOf(thing)= the number from which this thing is placed.

  getWhole() {
    return [...this.data]; // recall, "..." allows me to get the whole element inside the array or object.(act as getter to get private data)
  }
}

const textStorage = new DataStorage<string>(); // now I am telling "DataStorate" to use string generic type. It means ,to T, string type is assigned.
textStorage.addItem("First"); //then, it allows me to put 'First' into data array like data: ['First']
textStorage.addItem("Second");
textStorage.addItem("Third");
textStorage.removeItem("Second"); // It would be run like "indexOf('Second') among ['First','Second','Third]" and the result is = 1. then, going on to the next commend "splice(1.1)" = the thing which is the Second element, have to be removed.
console.log(textStorage.getWhole()); //['First','Third']

//Of course, I can reuse this DataStorage with other types like
const stringStorage = new DataStorage<number>();

/////////////////////////////////////////////////////////////////////
//generic Partial type = it helps me to order typescript to understand that there is the target keys in the target object.
//for example,

interface tasks {
  // set the default interface
  name: string;
  description: string;
  dueDate: Date;
}

function toDo(name: string, description: string, dueDate: Date): tasks {
  let things: Partial<tasks> = {}; //I set the variable which comprises an empty object. Because it is empty, typescript call an error about .name,.description and .dueDate as they don't exist in {};. so I set the partial generic. It means "hey, let things would follow the structure of <interface tasks>
  things.name = name;
  things.description = description;
  things.dueDate = dueDate;
  return things as tasks; //the reason why I set the return intentionally is that if I wouldn't, typescript argue that function toDo follows interface tasks. And also, tpyescript want to make sure that things should be followed tasks so I set the "as tasks"
}

/////////////////////////////////////////////////////////////////////
//Readonly + setting type of elements.

const testArray: Readonly<string[]> = ["test1", "test2"]; // by writing like this, I can make the array which is only used for readonly purpose. Therefore,
//testArray.shift() this is not allowed.
