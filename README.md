# websites
one project to rule them all

## todos
- ui
  - linter
  - moment js or something similar
  - deno instead of node
  - fix random jublawoma/admin/ and jublawomaadmin/
  - robots.txt
  - manifest
  - service worker
  - components
    - progress (timeline, step by step, etc)
    - accordion
    - image input with presets
    - not found / empty
    - update loading
  - hooks
    - improve use api for simpler responses
  - markdown
    - quote
    - list
    - placeholder
    - videos
    - links / buttons
  - sitemap
  - improve site handler
  - dev env for urls etc
  - add meta tags etc.
  - analytics (id service)
- api
  - images only visible to certain domains
  - whole global domain management
  - maybe rename global to shared
  - rework old component, they have errors, minimal validation and unsafe conversions like uuid casts
  - earlier wildcard import
  - avaluate reworking the api to map according to name of column like (select person_id id FROM person_idk) it would safe the into
  - images data structured by first 4 chars /a/b/1/2/uuid
  - endpoint knows and checks first the used domain. the path is just one entry without base
  - notification system
    - periodic emails
    - event emails
  - transition to records
- infrastructure
  - ufw rethink this or uninstall
  - backup strategy
  - google search manager
  - monitoring
  - migration testing
- github
  - add runner for auto deployment
- icons
  - fork lucide / or contribute
  - fix the with json to assert
  - useNameAsUnicode: true
  - remove unicode transform
- documentation
  - how to create tables
  - how to create enums
  - how to add a domain
  - how to fix errors
- jubla 
  - migrate blogs

## jublawoma

### ideas
- new images
- gallery
- shirt shop like
- anonymous invoice send with documents for finances
- profile / steckbrief of members or groups

### pages
- home
  - marketing 
  - upcoming event
  - what we stand for
  - new members
- events
  - list of upcoming events
    - title
    - date
    - location
    - additional information
  - repeating events
- images/events/blog/news
  - latest images
  - articles
  - stuff that happened
- about
  - organisation
  - stats
  - jubla schweiz
  - jubla aargau
- join
  - details
  - how to do it
- members
  - donations
  - t-shirts request

## uncle-t
- home
  - company
  - blogs
  - services
  - reviews
  - contact
- private
  - service
  - blogs
  - reviews
  - contact
- catering
  - services
  - blogs
  - reviews
  - contact
- course
  - available
  - review
  - details
  - contact
- about
  - reviews
- stories ?? 
  - catering events done
  - short case studies
- instagram
- more logo

## oliumbi
- projects (technology, methedology, process, result)
  - jublawoma
  - uncle-t
  - gyroscope
  - compass
- blog
  - complexity formula
  - enum to save complexity
  - raw sql / orm
  - bad architecture, learning from prototypes
- career (dates, certificastes)
  - school
  - informatics
  - employee
- professional links
  - github
- contact
  - email
- poker

## admin


### future
create primitives
- classname
- reset all css styling
- only ones directly using a html element
- hide multiple implementations behind them
- h1-6, p, small, i, b = text
- button, links, switch = action / interactable
- div, spam = box / view / container [flex, scroll, grid]
- image, picture, (video), (audio) = media
- input = input
- modal, toasty, etc = modal
- carousel

to test build a ui from the internet with a lot of css sugar
