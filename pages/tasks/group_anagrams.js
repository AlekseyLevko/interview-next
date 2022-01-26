import { Layout } from "../../src/components/Layout";
import { StyledTask } from "../../src/components/StyledTask";
import { getGroupedAnagrams } from "../../src/solutions/getGroupedAnagrams";

export default function Task() {
  return (
    <Layout>
      <StyledTask className="[ Content ]">
        <h1 className="[ Task__title ] [ Font_head28 ]">
          3. Сгруппировать анаграммы.
        </h1>
        <div className="[ Task__description ] [ Font_textReg20 ]">
          <h3 className="[ Font_head24 ]">Условие задачи:</h3>

          <p>
            Необходимо реализовать функцию, которая на вход принимает массив
            произвольных <strong>строковых</strong> значений и возвращает
            массив, членами которого являются подмассивы, полученные путем
            группировки{" "}
            <a
              href="https://www.textologia.ru/slovari/lingvisticheskie-terminy/anagramma/?q=486&n=314"
              target="_blank"
              rel="noreferrer"
            >
              анаграмм
            </a>
            , найденных в исходном массиве.
          </p>

          <p>
            Например, вызвав функцию с аргументом в виде массива{" "}
            <strong>{'["why", "hello", "ohell", "lloeh", "my", "ywh"]'}</strong>
            , возвращаемым значением должно быть{" "}
            <strong>
              {'[["why", "ywh"], ["hello", "ohell", "lloeh"], ["my"]]'}
            </strong>
            , так как <strong>ywh</strong> является анаграммой{" "}
            <strong>why</strong>, а <strong>ohell</strong> и{" "}
            <strong>lloeh</strong>, в свою очередь, являются анаграммами{" "}
            <strong>hello</strong>.
          </p>

          <h3 className="[ Font_head24 ]">Ожидаемые результаты:</h3>
          <p>
            <strong>{'["cat", "dog", "bird"]'}</strong> {"=>"}{" "}
            <strong>{'[["cat"], ["dog"], ["bird"]]'}</strong>
          </p>

          <p>
            <strong>{'["anagram", "gramana", "gram"]'}</strong> {"=>"}{" "}
            <strong>{'[["anagram", "gramana"], ["gram"]]'}</strong>
          </p>

          <p>
            <strong>{'["night", "stone", "pig", "thing", "gip"]'}</strong>{" "}
            {"=>"}{" "}
            <strong>{'[["night", "thing"], ["stone"], ["pig", "gip"]]'}</strong>
          </p>

          <h3 className="[ Font_head24 ]">Примечание:</h3>
          <p>
            Данная функция должна быть реализована в файле{" "}
            <strong>/src/solutions/getGroupedAnagrams.js</strong>.
          </p>
        </div>
      </StyledTask>
    </Layout>
  );
}

// please do not delete the line below
getGroupedAnagrams;
