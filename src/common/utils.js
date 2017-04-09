const setContent = (inputer, oldContent, newContent, content, endPosition, start, end) => {
  newContent = oldContent.substring(0, endPosition) + content + oldContent.substring(endPosition, oldContent.length)
  inputer.value = newContent
  inputer.setSelectionRange(endPosition + start, endPosition.length - end)
  return newContent
}

const updateContent = (inputer, oldContent, newContent, startPosition, endPosition, num1, num2) => {
  newContent = oldContent.substring(0, startPosition) + num1 + oldContent.substring(startPosition, endPosition) + num2 + oldContent.substring(endPosition, endPosition.length)
  inputer.value = newContent
  let len = newContent.length
  inputer.setSelectionRange(len, len)
  return newContent
}

export default {
    setContent,
    updateContent
}
