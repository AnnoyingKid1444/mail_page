import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableGrades from './tableGrades';

export default function TabsTest() {
    return (
        <Tabs className={'MainTab'}>

        <TabList className={'courseList'}>
        
          <Tab className={'courseTab'}>Course 1</Tab>
          <Tab className={'courseTab'}>Course 2</Tab>
          <Tab className={'courseTab'}>Course 3</Tab>
          <Tab className={'courseTab'}>Course 4</Tab>
        
        </TabList>
        
        {/* Course 1 */}
        
        <TabPanel>
        <Tabs className={'internalTabs'}>   
        
        <TabList className={'semestrList'}>
          <Tab className={'SemestrTab'}>Semestr 1</Tab>
          <Tab className={'SemestrTab'}>Semestr 2</Tab>
        </TabList>
        
        <TabPanel>
          <div className={'tabContent'}>
              <TableGrades/>
          </div>
        
        </TabPanel>
        
        <TabPanel>
          <div  className={'tabContent'}>
              <TableGrades/>
          </div>
         
        </TabPanel>
        
        </Tabs>
        
        </TabPanel>
        
        {/* Course 2 */}
        
        <TabPanel>
        <Tabs className={'internalTabs'}>   
        
        <TabList className={'semestrList'}>
            <Tab className={'SemestrTab'}>Semestr 1</Tab>
            <Tab className={'SemestrTab'}>Semestr 2</Tab>
        </TabList>
        
        <TabPanel>
        <div  className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        <TabPanel>
        <div  className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        </Tabs>
        </TabPanel>
        
        {/* Course 3 */}
        
        <TabPanel>
        <Tabs className={'internalTabs'}>   
        
        <TabList className={'semestrList'}>
            <Tab className={'SemestrTab'}>Semestr 1</Tab>
            <Tab className={'SemestrTab'}>Semestr 2</Tab>
        </TabList>
        
        <TabPanel>
        <div  className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        <TabPanel>
        <div  className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        </Tabs>
        </TabPanel>
        
        {/* Course 4 */}
        
        <TabPanel>
        <Tabs className={'internalTabs'}>   
        
        <TabList className={'semestrList'}>
            <Tab className={'SemestrTab'}>Semestr 1</Tab>
            <Tab className={'SemestrTab'}>Semestr 2</Tab>
        </TabList>
        
        <TabPanel>
          <div className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        <TabPanel>
        <div  className={'tabContent'}>
              <TableGrades/>
          </div>
        </TabPanel>
        
        </Tabs>
        </TabPanel>
        
        </Tabs>
    )

};