import { describe, it, expect } from '@jest/globals'
import Project from '../../../../../../src/services/projects/domain/Project'
import { decodeProject, encodeProject } from '../../../../../../src/services/projects/infraestructure/nanostores/serializers'
import Day from '../../../../../../src/services/projects/domain/Day'

describe('encodeProject', () => {
  it('Should encode the project information properly', () => {
    const name = 'Project 1'
    const id = '1'
    const days = {}
    const project = new Project(id, name, days)

    const result = encodeProject([project])

    expect(result).toEqual('[{"id":"1","name":"Project 1","days":{}}]')
  })

  it('Should encode the days properly', () => {
    const name = 'Project 1'
    const id = '1'
    const days = {
      '2021-01-01': new Day(new Date('2021-01-01T00:00:00.000Z')),
      '2021-01-02': new Day(new Date('2021-01-02T00:00:00.000Z'))
    }
    const project = new Project(id, name, days)

    const result = encodeProject([project])

    expect(result).toEqual((
      '[{"id":"1","name":"Project 1",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z",' +
      '"2021-01-02":"2021-01-02T00:00:00.000Z"}}]'
    ))
  })

  it('Should encode the days in UTC values', () => {
    const name = 'Project 1'
    const id = '1'
    const days = { '2021-01-01': new Day(new Date('2021-01-01T02:00:00.000+02:00')) }
    const project = new Project(id, name, days)

    const result = encodeProject([project])

    expect(result).toContain('"2021-01-01":"2021-01-01T00:00:00.000Z"')
  })

  it('Should encode properly multiple projects', () => {
    const days = { '2021-01-01': new Day(new Date('2021-01-01T00:00:00.000Z')) }
    const project1 = new Project('1', 'Project 1', days)
    const project2 = new Project('2', 'Project 2', days)

    const result = encodeProject([project1, project2])

    expect(result).toEqual((
      '[' +
      '{"id":"1","name":"Project 1",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z"}},' +
      '{"id":"2","name":"Project 2",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z"}}' +
      ']'
    ))
  })
})

describe('decodeProject', () => {
  it('Should encode the project information properly', () => {
    const projectsString = '[{"id":"1","name":"Project 1","days":{}}]'

    const results = decodeProject(projectsString)

    expect(results).toHaveLength(1)

    expect(results[0].id).toEqual('1')
    expect(results[0].name).toEqual('Project 1')
    expect(results[0].days).toEqual({})
  })

  it('Should encode the days properly', () => {
    const projectsString = (
      '[{"id":"1","name":"Project 1",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z",' +
      '"2021-01-02":"2021-01-02T00:00:00.000Z"}}]'
    )

    const results = decodeProject(projectsString)

    expect(results).toHaveLength(1)

    expect(results[0].id).toEqual('1')
    expect(results[0].name).toEqual('Project 1')
    expect(results[0].days).toEqual({
      '2021-01-01': new Day(new Date('2021-01-01T00:00:00.000Z')),
      '2021-01-02': new Day(new Date('2021-01-02T00:00:00.000Z'))
    })
  })

  it('Should treat the dates as UTC', () => {
    const projectsString = (
      '[{"id":"1","name":"Project 1",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z"}' +
      '}]'
    )

    const results = decodeProject(projectsString)

    expect(results).toHaveLength(1)
    expect(results[0].id).toEqual('1')
    expect(results[0].name).toEqual('Project 1')
    expect(results[0].days).toEqual({
      '2021-01-01': new Day(new Date('2021-01-01T02:00:00.000+02:00'))
    })
  })

  it('Should decode properly multiple projects', () => {
    const projectsString = (
      '[' +
      '{"id":"1","name":"Project 1",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z"}},' +
      '{"id":"2","name":"Project 2",' +
      '"days":{"2021-01-01":"2021-01-01T00:00:00.000Z"}}' +
      ']'
    )

    const results = decodeProject(projectsString)

    expect(results).toHaveLength(2)

    expect(results[0].id).toEqual('1')
    expect(results[0].name).toEqual('Project 1')
    expect(results[0].days).toEqual({
      '2021-01-01': new Day(new Date('2021-01-01T00:00:00.000Z'))
    })
    expect(results[1].id).toEqual('2')
    expect(results[1].name).toEqual('Project 2')
    expect(results[1].days).toEqual({
      '2021-01-01': new Day(new Date('2021-01-01T00:00:00.000Z'))
    })
  })
})
