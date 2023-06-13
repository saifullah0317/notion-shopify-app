import { h } from 'preact';
import { useEffect } from 'preact/hooks';

const Tabs = () => {
  useEffect(() => {
    const tabsElement = document.querySelector('.tabs');
    const { settings, blocks } = tabsElement.dataset;
    const parsedSettings = JSON.parse(settings);
    const parsedBlocks = JSON.parse(blocks);

    return () => {
      // Clean up any event listeners or other resources if needed
    };
  }, []);

  return (
    <div class="tabs">
      <ul class="tabs__navigation">
        {parsedBlocks.map((block) => (
          <li class="tabs__item">{block.title}</li>
        ))}
      </ul>

      <div class="tabs__content">
        {parsedBlocks.map((block) => (
          <div class="tabs__pane">{block.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
