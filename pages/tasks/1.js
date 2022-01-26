import { Layout } from "../../src/components/Layout";
import { StyledTask } from "../../src/components/StyledTask";
import { getPrimeNumbers } from "../../src/solutions/getPrimeNumbers";

export default function Task() {
  return (
    <Layout>
      <StyledTask className="[ Content ]">
        <h1 className="[ Task__title ] [ Font_head28 ]">
          1. Найти все простые числа в указанном диапазоне.
        </h1>
        <div className="[ Task__description ] [ Font_textReg20 ]">
          <h3 className="[ Font_head24 ]">Условие задачи:</h3>
          <p>
            Натуральное число, большее 1, называется{" "}
            <a
              href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE"
              target="_blank"
              rel="noreferrer"
            >
              простым
            </a>
            , если оно не делится ни на одно другое натуральное число, кроме
            себя и <strong>1</strong>. Другими словами, <strong>n</strong> -
            простое, если при его делении на любое число кроме{" "}
            <strong>1</strong> и <strong>n</strong> есть остаток. Например,{" "}
            <strong>5</strong> это простое число, оно не может быть разделено
            без остатка на <strong>2</strong>, <strong>3</strong>, и{" "}
            <strong>4</strong>.
          </p>
          <p>
            Напишите функцию, которая принимает на вход число <strong>n</strong>{" "}
            и возвращает массив простых чисел из интервала от <strong>2</strong>{" "}
            до <strong>n</strong>
          </p>
          <p>
            Например, для <strong>n = 10</strong> возвращаемое значение должно
            быть <strong>[2, 3, 5, 7]</strong>
          </p>
          <h3 className="[ Font_head24 ]">Примечание:</h3>
          <p>
            Данная функция должна быть реализована в файле{" "}
            <strong>/src/solutions/getPrimeNumbers.js</strong>.
          </p>
        </div>
      </StyledTask>
    </Layout>
  );
}

// please do not delete the line below
getPrimeNumbers;
