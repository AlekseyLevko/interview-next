import { Layout } from "../../src/components/Layout";
import { StyledTask } from "../../src/components/StyledTask";
import { cloneDeep } from "../../src/solutions/cloneDeep";

export default function Task() {
  return (
    <Layout>
      <StyledTask className="[ Content ]">
        <h1 className="[ Task__title ] [ Font_head28 ]">
          5. Реализовать функцию глубокого клонирования.
        </h1>
        <div className="[ Task__description ] [ Font_textReg20 ]">
          <h3 className="[ Font_head24 ]">Условие задачи:</h3>
          <p>
            В JavaScript нет встроенного метода для создания полностью{" "}
            <strong>независимой</strong> копии объекта. К примеру, выполнение
            инструкции <strong>const newUser = user</strong> приведет лишь к
            копированию <strong>ссылки</strong> на область памяти, в которой
            находится объект <strong>user</strong> в <strong>newUser</strong>.
          </p>
          <p>
            Для получения {'"'}более независимой{'"'} копии объекта мы можем
            воспользоваться методом{" "}
            <strong>const newUser = Object.assign({"{}"}, user)</strong>,
            который создаст {'"'}независимую{'"'} копию исходного объекта, если
            все поля, содержащиеся в исходном объекте, являются примитивными
            значениями.
          </p>
          <p>
            Но что делать, если нам необходимо получить {'"'}
            <strong>полностью независимую</strong>
            {'"'} копию объекта, полями которого могут являться другие объекты,
            которые, в свою очередь, также могут содержать объекты в качестве
            значений своих полей?
          </p>
          <p>
            Необходимо реализовать функцию, которая на вход будет принимать
            произовольный объект и возвращать <strong>независимый</strong> клон
            этого объекта, то есть выполнять{" "}
            <strong>глубокое клонирование</strong> данных.
          </p>
          <h3 className="[ Font_head24 ]">Подсказка:</h3>
          <p>
            Для перебора свойств объекта (массива) можно использовать
            конструкцию <strong>for (let key in object) {"{}"}</strong>.
          </p>
          <h3 className="[ Font_head24 ]">Примечание:</h3>
          <p>
            Данная функция должна быть реализована в файле{" "}
            <strong>/src/solutions/cloneDeep.js</strong>.
          </p>
        </div>
      </StyledTask>
    </Layout>
  );
}

// please do not delete the line below
cloneDeep;
