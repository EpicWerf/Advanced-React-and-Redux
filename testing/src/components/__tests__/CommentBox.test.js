import React from "react"
import CommentBox from "components/CommentBox"
import { mount } from "enzyme"

let wrapped
beforeEach(() => {
	wrapped = mount(<CommentBox />)
})

afterEach(() => {
	wrapped.unmount()
})

it("has a text area and a button", () => {
	console.log(wrapped.find("textarea").length)
	console.log(wrapped.find("textarea").length)
})
