## Component Hierarchy

** AuthFormContainer **
- AuthForm

** HomeContainer **
* Header
* Search

** MapContainer **
* Header
* BarsContainer
* RouteContainer

** BarsContainer **
* BarsFilter
* BarsIndex
  - BarIndexItem

** RouteContainer **
* RouteHeader
* BarIndexItem

** BarIndexItem **
* BarDetail
  - BarHeader
  - ReviewFormContainer
    * ReviewForm


## Route
| Path | Component |
|---|---|
|/sign-up | AuthFormContainer |
|/sign-in | AuthFormContainer |
|/home | HomeContainer |
|/map | MapContainer |
|/map/bars | BarsContainer |
|/map/route | RouteContainer |
|/bars/:id | BarIndexItem |
|/bars/:id/reviews | ReviewFormContainer |
