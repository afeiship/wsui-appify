import '!style-loader!css-loader!sass-loader!../node_modules/@jswork/wsui-reset/dist/index.scss';
import '!style-loader!css-loader!sass-loader!../node_modules/@jswork/wsui-shorty/dist/index.scss';
import '!style-loader!css-loader!sass-loader!../src/index.scss';
import '!style-loader!css-loader!sass-loader!../__stories__/app.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
