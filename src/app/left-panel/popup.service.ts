import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';


@Injectable()
export class PopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

    showAsComponent(message: string) {
    // Создание элемента
    const popup = document.createElement('popup-component');

    // Создание компонента и соединение его с элементом

    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Прикрепление к дереву встроенных представлений, собранных в Контейнере представлений (ViewContainerRef)
    // Корневое представление (hostView) - это представление узла компонента.
    //Иерархия представлений является ключевой частью обнаружения угловых изменений, для этого производится прикрепление

    this.applicationRef.attachView(popupComponentRef.hostView);

    // Обнаружение события
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    //Из "Dynamic component loader", instance - создание экземпляра каждого компонента
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }

  //Также можно использовать новый метод кастомного элемента для того чтобы добавить popup к DOM
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Set the message
    popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}