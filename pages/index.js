import styled from "styled-components";
import { Layout } from "../src/components/Layout";
import { Link } from "../src/components/Link";

export default function Home() {
  return (
    <Layout>
      <StyledHome className="[ Content ]">
        <h2 className="[ Font_head28 ]">Задания:</h2>
        <ul className="[ Home_tasks ]">
          <li className="[ Home_task ]">
            <Link
              href="/tasks/prime_numbers"
              className="[  ] [ Color_blue Font_head20 ]"
            >
              1. Найти все простые числа в указанном диапазоне.
            </Link>
          </li>
          <li className="[ Home_task ]">
            <Link
              href="/tasks/number_of_points_in_circle"
              className="[  ] [ Color_blue Font_head20 ]"
            >
              2. Вычислить количество точек, лежащих внутри окружности.
            </Link>
          </li>
          <li className="[ Home_task ]">
            <Link
              href="/tasks/group_anagrams"
              className="[  ] [ Color_blue Font_head20 ]"
            >
              3. Сгруппировать анаграммы.
            </Link>
          </li>
          <li className="[ Home_task ]">
            <Link
              href="/tasks/replace_values_in_object"
              className="[  ] [ Color_blue Font_head20 ]"
            >
              4. Заменить значения в строковых полях объекта на всех уровнях
              вложенности.
            </Link>
          </li>
          <li className="[ Home_task ]">
            <Link href="/tasks/3" className="[  ] [ Color_blue Font_head20 ]">
              5. Реализовать функцию глубокого клонирования.
            </Link>
          </li>
        </ul>
      </StyledHome>
    </Layout>
  );
}

const StyledHome = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  .Home_tasks {
    margin-top: 24px;
  }

  li:not(:first-child) {
    margin-top: 16px;
  }
`;
