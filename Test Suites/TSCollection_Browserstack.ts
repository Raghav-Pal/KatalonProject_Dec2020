<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>TSCollection_Browserstack</name>
   <tag></tag>
   <executionMode>PARALLEL</executionMode>
   <maxConcurrentInstances>2</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Custom</groupName>
            <profileName>default</profileName>
            <runConfigurationId>mac_chrome</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/TestSuiteForBrowserstack</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Custom</groupName>
            <profileName>default</profileName>
            <runConfigurationId>windows10_chrome</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/TestSuiteForBrowserstack</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
