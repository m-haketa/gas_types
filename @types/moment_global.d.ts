//"userSymbol": "Moment",
//"libraryId": "15hgNOjKHUG4UtyZl9clqBbl23sDvWMS8pfDJOyIapZk5RBqwL3i-rlCo",
//"version": "9"
//
// 事前に下記を実行する必要あり
// npm install moment

import moment = require('moment')

declare namespace Moment {
  function moment(
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean
  ): moment.Moment
}
