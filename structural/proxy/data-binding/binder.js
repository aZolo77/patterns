// привязка данных [data-binding]
class Binder {
  bindTo(sourceObject, sourceProperty, targetObject, ...targetProperties) {
    let bindHandler = {
      set(target, property, newValue) {
        if (property == sourceProperty) {
          target[sourceProperty] = newValue;
          targetObject[targetProperty] = newValue;
        }
      }
    };

    return new Proxy(sourceObject, bindHandler);
  }
}
