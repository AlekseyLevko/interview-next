import Image from "next/image";
import { Layout } from "../../src/components/Layout";
import { StyledTask } from "../../src/components/StyledTask";
import { getNumberOfPointsInCircle } from "../../src/solutions/getNumberOfPointsInCircle";

export default function Task() {
  return (
    <Layout>
      <StyledTask className="[ Content ]">
        <h1 className="[ Task__title ] [ Font_head28 ]">
          2. Вычислить количество точек, лежащих внутри окружности.
        </h1>
        <div className="[ Task__description ] [ Font_textReg20 ]">
          <h3 className="[ Font_head24 ]">Условие задачи:</h3>
          <p>
            Необходимо реализовать функцию, которая принимает на вход значение
            радиуса окружности с центром в точке <strong>(0, 0)</strong> и
            возвращает количество точек, которые лежат внутри этой окружности и
            при этом имеют целочисленные значения координат <strong>x</strong> и{" "}
            <strong>y</strong>.
          </p>
          <p>
            Например, для окружности с <strong>r = 2</strong> результат должен
            быть <strong>13</strong>:
          </p>
          <div className="[ Tack__schemaContainer ]">
            <Image
              src="/getPointsInCircle.png"
              width={500}
              height={500}
              alt="logo"
            />
          </div>

          <h3 className="[ Font_head24 ]">Примечание:</h3>
          <p>
            Данная функция должна быть реализована в файле{" "}
            <strong>/src/solutions/getNumberOfPointsInCircle.js</strong>.
          </p>
        </div>
      </StyledTask>
    </Layout>
  );
}

// please do not delete the line below
getNumberOfPointsInCircle;
