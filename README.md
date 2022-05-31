_Никитина Нелли, гр. 381907-1_
# Методы оптимизации. Лабораторная работа

<div>
  На входе имеется пять тестов:
  <ol>
    <li>100(x<sub>1</sub><sup>2</sup> - x<sub>2</sub>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup></li>
    <li>100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup></li>
    <li>100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>, 
                       x<sub>1</sub> &#8712; [-1.2, 1], x<sub>2</sub> &#8712; [-1, 1]</li>
    <li>(x<sub>1</sub> + 10x<sub>2</sub>)<sup>2</sup> + 5(x<sub>3</sub> - x<sub>4</sub>)<sup>2</sup> 
                        + (x<sub>2</sub> - 2x<sub>3</sub>)<sup>4</sup> + 10(x<sub>1</sub> - x<sub>4</sub>)<sup>4</sup></li>
    <li>
      &lt;AX, X&gt; + &lt;G, X&gt;, где A (положительно определенная матрица):
      <table>
        <tr>
          <td>2</td><td>-1</td><td>0</td>
        </tr>
        <tr>
          <td>-1</td><td>2</td><td>-1</td>
        </tr>
        <tr>
          <td>0</td><td>-1</td><td>2</td>
        </tr>
      </table>
      и G (вектор):
      <table>
        <tr><td>0</td></tr>
        <tr><td>0</td></tr>
        <tr><td>1</td></tr>
      </table>
    </li>
  </ol>
  <p>Параметры алгоритма автоматически располагаются в соответствующих полях при выборе теста. Данные значения (кроме начальной точки) можно указать самостоятельно.</p>
</div>
<p>Результаты тестов с начальными параметрами в соответствующих разделах ниже.</p>

## Метод Хука-Дживса

<ol>
  <li>
    100(x<sub>1</sub><sup>2</sup> - x<sub>2</sub>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>
    <p><img src="/testsHJ/Screenshot_1.jpg" width="600"></p>
  </li>
  <li>
    100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>
    <p><img src="/testsHJ/Screenshot_2.jpg" width="600"></p>
  </li>
  <li>
    100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>, 
                       x<sub>1</sub> &#8712; [-1.2, 1], x<sub>2</sub> &#8712; [-1, 1]
    <p><img src="/testsHJ/Screenshot_3.jpg" width="600"></p>
  </li>
  <li>
    (x<sub>1</sub> + 10x<sub>2</sub>)<sup>2</sup> + 5(x<sub>3</sub> - x<sub>4</sub>)<sup>2</sup> 
                        + (x<sub>2</sub> - 2x<sub>3</sub>)<sup>4</sup> + 10(x<sub>1</sub> - x<sub>4</sub>)<sup>4</sup>
    <p><img src="/testsHJ/Screenshot_4.jpg" width="600"></p>
  </li>
  <li>
    &lt;AX, X&gt; + &lt;G, X&gt;, где A — положительно определенная матрица и G — вектор
    <p><img src="/testsHJ/Screenshot_5.jpg" width="600"></p>
  </li>
</ol>

## Метод Нелдера-Мида

<ol>
  <li>
    100(x<sub>1</sub><sup>2</sup> - x<sub>2</sub>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>
    <p><img src="/testsNM/Screenshot_1.jpg" width="600"></p>
  </li>
  <li>
    100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>
    <p><img src="/testsNM/Screenshot_2.jpg" width="600"></p>
  </li>
  <li>
    100(x<sub>2</sub> - x<sub>1</sub><sup>3</sup>)<sup>2</sup> + (1 - x<sub>1</sub>)<sup>2</sup>, 
                       x<sub>1</sub> &#8712; [-1.2, 1], x<sub>2</sub> &#8712; [-1, 1]
    <p><img src="/testsNM/Screenshot_3.jpg" width="600"></p>
  </li>
  <li>
    (x<sub>1</sub> + 10x<sub>2</sub>)<sup>2</sup> + 5(x<sub>3</sub> - x<sub>4</sub>)<sup>2</sup> 
                        + (x<sub>2</sub> - 2x<sub>3</sub>)<sup>4</sup> + 10(x<sub>1</sub> - x<sub>4</sub>)<sup>4</sup>
    <p><img src="/testsNM/Screenshot_4.jpg" width="600"></p>
  </li>
  <li>
    &lt;AX, X&gt; + &lt;G, X&gt;, где A — положительно определенная матрица и G — вектор
    <p><img src="/testsNM/Screenshot_5.jpg" width="600"></p>
  </li>
</ol>
