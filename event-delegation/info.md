# Event Delegation 🚧

- Event Delegation can only exist if event capturing/bubbling exists.
- Its most relevant example is of that input element.
- Example :-
  <details>
  Example :-
  <summary>

  ```HTML
      <ul id="category">
          <li id="laptops">Laptops</li>
          <li id="cameras">Cameras</li>
          <li id="shoes">Shoes</li>
          <div id="test">testing</div>
      </ul>
  ```

  ```Javascript
      document.getElementById("category").addEventListener("click", (e) => {
      console.log(e);
      if (e.target.nodeName === "LI") {
      window.location.href = "/" + e.target.id;
      }
      })
  ```

  </summary>
  </details>

## Benifits

- Memory Optimization because now event listener is attached to only single parent and to all of its children.
- Mitigates the risk of performance bottlenecks.
- Writing less amount of code, avoiding code replication and redundancy.
- DOM manipulation -> when elements get added dynamically, the process of adding events is slow.

## Limitations

- All the events are not bubbled up, some events like blur, focus are not bubbled up
- if e.stopPropogation is used in child, then events are not bubbled up
