/**
 * Testing & QA Keywords
 * Skill Area: testing
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const TESTING_KEYWORDS: KeywordEntry[] = [
  // JavaScript/TypeScript Testing
  { name: 'Jest', variations: ['jestjs'], weight: 1.8, isCore: true },
  { name: 'Mocha', variations: ['mochajs'], weight: 1.5, isCore: false },
  { name: 'Chai', variations: ['chaijs'], weight: 1.3, isCore: false },
  { name: 'Vitest', variations: ['vite test'], weight: 1.5, isCore: false },
  { name: 'React Testing Library', variations: ['rtl', 'testing-library'], weight: 1.6, isCore: false },
  { name: 'Jasmine', variations: [], weight: 1.3, isCore: false },
  { name: 'Sinon', variations: ['sinon.js'], weight: 1.2, isCore: false },
  { name: 'Enzyme', variations: [], weight: 1.1, isCore: false },

  // E2E Testing
  { name: 'Cypress', variations: ['cypress.io'], weight: 1.8, isCore: true },
  { name: 'Playwright', variations: ['playwright.dev'], weight: 1.8, isCore: true },
  { name: 'Selenium', variations: ['selenium webdriver', 'webdriver'], weight: 1.7, isCore: true },
  { name: 'Puppeteer', variations: [], weight: 1.4, isCore: false },
  { name: 'TestCafe', variations: ['test cafe'], weight: 1.2, isCore: false },
  { name: 'Nightwatch', variations: ['nightwatch.js'], weight: 1.1, isCore: false },
  { name: 'Protractor', variations: [], weight: 1.0, isCore: false },
  { name: 'WebdriverIO', variations: ['wdio', 'webdriver.io'], weight: 1.3, isCore: false },

  // Java Testing
  { name: 'JUnit', variations: ['junit 5', 'junit5', 'junit 4'], weight: 1.8, isCore: true },
  { name: 'TestNG', variations: ['test ng'], weight: 1.5, isCore: false },
  { name: 'Mockito', variations: [], weight: 1.6, isCore: false },
  { name: 'PowerMock', variations: ['power mock'], weight: 1.2, isCore: false },
  { name: 'AssertJ', variations: ['assert j'], weight: 1.2, isCore: false },
  { name: 'Hamcrest', variations: [], weight: 1.1, isCore: false },
  { name: 'Spock', variations: ['spock framework'], weight: 1.3, isCore: false },
  { name: 'Arquillian', variations: [], weight: 1.1, isCore: false },

  // Python Testing
  { name: 'pytest', variations: ['py.test', 'python pytest'], weight: 1.8, isCore: true },
  { name: 'unittest', variations: ['python unittest', 'pyunit'], weight: 1.4, isCore: false },
  { name: 'nose', variations: ['nosetests', 'nose2'], weight: 1.1, isCore: false },
  { name: 'Robot Framework', variations: ['robotframework'], weight: 1.3, isCore: false },
  { name: 'pytest-mock', variations: ['pytest mock'], weight: 1.1, isCore: false },
  { name: 'Hypothesis', variations: ['hypothesis testing'], weight: 1.2, isCore: false },
  { name: 'Behave', variations: ['python behave'], weight: 1.2, isCore: false },

  // .NET Testing
  { name: 'NUnit', variations: ['n unit'], weight: 1.5, isCore: false },
  { name: 'xUnit', variations: ['xunit.net'], weight: 1.5, isCore: false },
  { name: 'MSTest', variations: ['ms test'], weight: 1.3, isCore: false },
  { name: 'Moq', variations: [], weight: 1.3, isCore: false },
  { name: 'NSubstitute', variations: [], weight: 1.1, isCore: false },
  { name: 'SpecFlow', variations: ['spec flow'], weight: 1.2, isCore: false },

  // API Testing
  { name: 'Postman', variations: ['postman tests'], weight: 1.6, isCore: true },
  { name: 'REST Assured', variations: ['rest-assured', 'restassured'], weight: 1.5, isCore: false },
  { name: 'Insomnia', variations: [], weight: 1.2, isCore: false },
  { name: 'SoapUI', variations: ['soap ui'], weight: 1.3, isCore: false },
  { name: 'Karate', variations: ['karate dsl'], weight: 1.3, isCore: false },
  { name: 'Supertest', variations: ['super test'], weight: 1.2, isCore: false },
  { name: 'HTTPie', variations: ['http ie'], weight: 1.0, isCore: false },
  { name: 'Newman', variations: ['postman newman'], weight: 1.2, isCore: false },

  // Performance Testing
  { name: 'JMeter', variations: ['apache jmeter'], weight: 1.6, isCore: false },
  { name: 'Gatling', variations: [], weight: 1.4, isCore: false },
  { name: 'Locust', variations: ['locust.io'], weight: 1.4, isCore: false },
  { name: 'k6', variations: ['grafana k6'], weight: 1.4, isCore: false },
  { name: 'Artillery', variations: ['artillery.io'], weight: 1.2, isCore: false },
  { name: 'Vegeta', variations: [], weight: 1.1, isCore: false },
  { name: 'wrk', variations: [], weight: 1.0, isCore: false },
  { name: 'LoadRunner', variations: ['load runner', 'microfocus loadrunner'], weight: 1.3, isCore: false },
  { name: 'BlazeMeter', variations: ['blaze meter'], weight: 1.2, isCore: false },
  { name: 'Lighthouse', variations: ['google lighthouse'], weight: 1.3, isCore: false },
  { name: 'WebPageTest', variations: ['webpage test'], weight: 1.1, isCore: false },

  // Mobile Testing
  { name: 'Appium', variations: [], weight: 1.5, isCore: false },
  { name: 'Detox', variations: ['wix detox'], weight: 1.3, isCore: false },
  { name: 'Espresso', variations: ['android espresso'], weight: 1.3, isCore: false },
  { name: 'XCTest', variations: ['xcuitest', 'xc test'], weight: 1.3, isCore: false },
  { name: 'Maestro', variations: ['mobile maestro'], weight: 1.2, isCore: false },

  // BDD Frameworks
  { name: 'Cucumber', variations: ['cucumber.js', 'cucumberjs'], weight: 1.5, isCore: false },
  { name: 'Gherkin', variations: [], weight: 1.3, isCore: false },
  { name: 'SpecFlow', variations: ['spec flow'], weight: 1.2, isCore: false },
  { name: 'Behave', variations: [], weight: 1.2, isCore: false },
  { name: 'Gauge', variations: [], weight: 1.1, isCore: false },

  // Code Quality & Coverage
  { name: 'SonarQube', variations: ['sonar', 'sonarcloud'], weight: 1.5, isCore: false },
  { name: 'Code Coverage', variations: ['test coverage', 'coverage report'], weight: 1.5, isCore: true },
  { name: 'Istanbul', variations: ['nyc', 'istanbul.js'], weight: 1.2, isCore: false },
  { name: 'Jacoco', variations: ['jacoco coverage'], weight: 1.2, isCore: false },
  { name: 'Codecov', variations: ['code cov'], weight: 1.2, isCore: false },
  { name: 'Coveralls', variations: [], weight: 1.1, isCore: false },
  { name: 'Cobertura', variations: [], weight: 1.0, isCore: false },

  // Visual/Snapshot Testing
  { name: 'Percy', variations: ['browserstack percy'], weight: 1.3, isCore: false },
  { name: 'Chromatic', variations: ['chromatic visual'], weight: 1.3, isCore: false },
  { name: 'Storybook', variations: [], weight: 1.4, isCore: false },
  { name: 'Snapshot Testing', variations: ['snapshot tests'], weight: 1.3, isCore: false },
  { name: 'BackstopJS', variations: ['backstop'], weight: 1.1, isCore: false },
  { name: 'Applitools', variations: ['applitools eyes'], weight: 1.2, isCore: false },

  // Contract Testing
  { name: 'Pact', variations: ['pact.io', 'pact testing'], weight: 1.3, isCore: false },
  { name: 'Contract Testing', variations: ['consumer driven contracts', 'cdc'], weight: 1.3, isCore: false },
  { name: 'Spring Cloud Contract', variations: [], weight: 1.1, isCore: false },

  // Mocking & Stubbing
  { name: 'WireMock', variations: ['wire mock'], weight: 1.3, isCore: false },
  { name: 'MockServer', variations: ['mock server'], weight: 1.2, isCore: false },
  { name: 'Nock', variations: [], weight: 1.1, isCore: false },
  { name: 'MSW', variations: ['mock service worker'], weight: 1.3, isCore: false },
  { name: 'JSON Server', variations: ['json-server'], weight: 1.0, isCore: false },
  { name: 'Mirage', variations: ['miragejs'], weight: 1.1, isCore: false },

  // Test Management
  { name: 'TestRail', variations: ['test rail'], weight: 1.2, isCore: false },
  { name: 'Zephyr', variations: ['zephyr scale'], weight: 1.2, isCore: false },
  { name: 'Xray', variations: ['xray test management'], weight: 1.1, isCore: false },
  { name: 'Allure', variations: ['allure report', 'allure framework'], weight: 1.3, isCore: false },
  { name: 'qTest', variations: ['q test'], weight: 1.0, isCore: false },

  // Testing Concepts
  { name: 'Unit Testing', variations: ['unit tests', 'unit test'], weight: 1.8, isCore: true },
  { name: 'Integration Testing', variations: ['integration tests', 'integration test'], weight: 1.8, isCore: true },
  { name: 'E2E Testing', variations: ['end-to-end testing', 'end to end', 'e2e tests'], weight: 1.7, isCore: true },
  { name: 'Regression Testing', variations: ['regression tests'], weight: 1.5, isCore: false },
  { name: 'Smoke Testing', variations: ['smoke tests', 'sanity testing'], weight: 1.3, isCore: false },
  { name: 'Load Testing', variations: ['load tests', 'stress testing'], weight: 1.5, isCore: false },
  { name: 'Performance Testing', variations: ['perf testing'], weight: 1.5, isCore: false },
  { name: 'Security Testing', variations: ['pen testing', 'penetration testing'], weight: 1.4, isCore: false },
  { name: 'Acceptance Testing', variations: ['uat', 'user acceptance testing'], weight: 1.4, isCore: false },
  { name: 'Functional Testing', variations: ['functional tests'], weight: 1.4, isCore: false },
  { name: 'Manual Testing', variations: ['manual qa', 'manual test'], weight: 1.2, isCore: false },
  { name: 'Automated Testing', variations: ['test automation', 'automation testing', 'automated tests'], weight: 1.8, isCore: true },
  { name: 'TDD', variations: ['test driven development', 'test-driven'], weight: 1.6, isCore: true },
  { name: 'BDD', variations: ['behavior driven development', 'behaviour driven'], weight: 1.5, isCore: false },
  { name: 'ATDD', variations: ['acceptance test driven'], weight: 1.2, isCore: false },
  { name: 'Shift Left', variations: ['shift-left testing', 'shift left'], weight: 1.2, isCore: false },
  { name: 'Test Pyramid', variations: ['testing pyramid'], weight: 1.2, isCore: false },
  { name: 'QA', variations: ['quality assurance', 'qa engineer', 'qa analyst'], weight: 1.8, isCore: true },
  { name: 'SDLC', variations: ['software development life cycle'], weight: 1.3, isCore: false },
  { name: 'Agile Testing', variations: ['agile qa'], weight: 1.3, isCore: false },
  { name: 'CI/CD Testing', variations: ['continuous testing'], weight: 1.4, isCore: false },

  // Bug Tracking & Project Management
  { name: 'Jira', variations: ['atlassian jira', 'jira software'], weight: 1.5, isCore: true },
  { name: 'Confluence', variations: ['atlassian confluence'], weight: 1.3, isCore: false },
  { name: 'Bugzilla', variations: [], weight: 1.0, isCore: false },
  { name: 'Azure Boards', variations: [], weight: 1.1, isCore: false },
  { name: 'Trello', variations: [], weight: 1.0, isCore: false },
  { name: 'Asana', variations: [], weight: 1.0, isCore: false },
  { name: 'Monday', variations: ['monday.com'], weight: 1.0, isCore: false },
  { name: 'Notion', variations: [], weight: 1.0, isCore: false },

  // Methodologies
  { name: 'Agile', variations: ['agile methodology', 'agile development'], weight: 1.8, isCore: true },
  { name: 'Scrum', variations: ['scrum master', 'scrum methodology'], weight: 1.7, isCore: true },
  { name: 'Kanban', variations: ['kanban board'], weight: 1.4, isCore: false },
  { name: 'Waterfall', variations: ['waterfall methodology'], weight: 1.1, isCore: false },
  { name: 'SAFe', variations: ['scaled agile framework', 'scaled agile'], weight: 1.2, isCore: false },
  { name: 'Sprint', variations: ['sprint planning', 'sprint review', 'sprint retrospective'], weight: 1.3, isCore: false },
  { name: 'Standup', variations: ['daily standup', 'stand-up', 'daily scrum'], weight: 1.1, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getTestingPatterns(): [RegExp, string][] {
  return TESTING_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
