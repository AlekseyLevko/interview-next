import Image from "next/image";
import styled from "styled-components";
import { Layout } from "../../src/components/Layout";
import { StyledTask } from "../../src/components/StyledTask";
import { replaceValuesInObject } from "../../src/solutions/replaceValuesInObject";

export default function Task() {
  return (
    <Layout>
      <LocalStyles>
        <StyledTask className="[ Content ]">
          <h1 className="[ Task__title ] [ Font_head28 ]">
            4. Заменить символы <strong>,</strong> на <strong>;</strong> в
            строковых полях объекта на всех уровнях вложенности.
          </h1>
          <div className="[ Task__description ] [ Font_textReg20 ]">
            <h3 className="[ Font_head24 ]">Условие задачи:</h3>
            <p>
              Реализуйте функцию, которая на вход принимает объект с
              произвольной структурой данных и заменяет все символы{" "}
              <strong>,</strong>, встречающиеся в строковых полях этого объекта
              на <strong>;</strong>. Функция должна одинаково хорошо
              обрабатывать строковые поля на всех уровнях вложенности
              трансформируемого объекта.
            </p>
            <p>Возвращаемым значением должен быть трансформированный объект.</p>
            <h3 className="[ Font_head24 ]">
              Ожидаемые результаты работы функции:
            </h3>
            <div className="[ Task__resultsContainer ]">
              <div className="[ Task__resultsContainerRow ]">
                <div>Принимаемое значение:</div>
                <div>Возвращаемое значение:</div>
              </div>
              <div className="[ Task__resultsContainerRow ]">
                <div className="[ Task__resultBefore ]">
                  <Image
                    src="/obj_before_transform.png"
                    width={892}
                    height={632}
                    alt="logo"
                  />
                </div>
                <div className="[ Task__resultAfter ]">
                  <Image
                    src="/obj_after_transform.png"
                    width={892}
                    height={632}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <h3 className="[ Font_head24 ]">Примечание:</h3>
            <p>
              Данная функция должна быть реализована в файле{" "}
              <strong>/src/solutions/replace_values_in_object.js</strong>.
            </p>
          </div>
        </StyledTask>
      </LocalStyles>
    </Layout>
  );
}

const LocalStyles = styled.div`
  .Task__resultsContainerRow {
    align-self: stretch;
    display: flex;
    margin-top: 24px;
  }

  .Task__resultsContainerRow > * {
    flex: 1;
    line-height: 0;
    padding: 0 16px;
  }
`;

// please do not delete the line below
replaceValuesInObject;
