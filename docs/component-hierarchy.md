## Component Hierarchy

__AuthFormContainer__
- AuthForm

__HomeContainer__
* Header
* Search

__MapContainer__
* Header
* BarsContainer
* RouteContainer

__BarsContainer__
* BarsFilter
* BarsIndex
  - BarIndexItem

__RouteContainer__
* RouteHeader
* BarIndexItem

__BarIndexItem__
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
