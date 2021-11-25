/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('Navigation by Link', () => {
  it('Should route to blog page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('Blog page')).toBeInTheDocument()
  })
  it('Should route to comment page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('Comment page')).toBeInTheDocument()
  })
  it('Should route to context page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('Context page')).toBeInTheDocument()
  })
  it('Should route to todos page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('Todos page')).toBeInTheDocument()
  })
  it('Should route to home page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
  })
})