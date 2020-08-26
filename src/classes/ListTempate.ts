import { HasFormatter } from "../Interfaces/HasFormatter.js";

export class ListTemplate {
  // when you have private/public/readonly etc in front
  // typescript will auto assign passed in arguments
  constructor(private container: HTMLUListElement) { }

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li'); //type HTMLLIElement inferred

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  };
}