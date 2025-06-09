## console scroll

```
document.documentElement.style.scrollBehavior = "auto";

const step = 10;
const delay = 30;

const scrollSlowly = () => {
  const scrollHeight = document.body.scrollHeight;

  const scrollStep = () => {
    if (window.scrollY < scrollHeight) {
      window.scrollBy(0, step);
      setTimeout(scrollStep, delay);
    }
  };

  scrollStep();
};

setTimeout(scrollSlowly, 10000)
```
