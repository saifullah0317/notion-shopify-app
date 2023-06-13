type TabsSettings = {
    tab1Title: string;
    tab2Title: string;
    tab3Title: string;
    // Add more input types as needed
  };
  
  type TabsSection = {
    type: 'tabs';
    settings: TabsSettings;
  };
  
  type TabsBlock = {
    type: 'tabs_block';
    title: string;
    content: string;
  };
  
  export type TabsSectionSchema = {
    settings: TabsSettings;
    blocks: TabsBlock[];
  };
  