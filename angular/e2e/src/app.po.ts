import { browser, by, element, promise, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  currentUrl(): promise.Promise<string> {
    return browser.getCurrentUrl();
  }

  navigation = {
    login: element(by.linkText('Login')),
    register: element(by.linkText('Register')),
  };

  login = {
    name: element(by.css('input[type=text]')),
    password: element(by.css('input[type=password]')),
    submit: element(by.buttonText('Login')),
  };

  register = {
    name: element(by.css('input[type=text]')),
    password: element(by.css('input[type=password]')),
    submit: element(by.buttonText('Register')),
  };

  todos = {
    items: element.all(by.css('.todo')),

    itemAt: (index: number) => {
      const item = this.todos.items.get(index);
      return {
        title: item.getText(),
        deleteButton: item.element(by.buttonText('Delete')),
      };
    },

    newTodo: {
      title: element(by.name('title')),
      submit: element(by.buttonText('Create')),
    },
  };
}
