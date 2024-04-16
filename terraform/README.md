### Instructions

1. In this folder you can make changes to infrastructure hosted on vultr.
2. Make sure to format files using `npm run format:terraform` in the project root before commit.
3. Pushing to master will deploy automatically using terraform cloud.

### Debugging locally

1. Run `terraform login` so that the terraform state is consistent locally. Only required for planning & applying changes locally.
2. Create a `local.tfvars` file to hold all the required inputs for terraform.
```python
# Example
DB_USER     = ""
DB_PASSWORD = ""
EMAIL_NAME     = ""
EMAIL_PASSWORD = ""
REPOSITORY_URL = ""
VULTR_API_KEY  = ""
```
3. Run `terraform plan -var-file local.tfvars` for example to see changes that will be made.

### Debugging remotely

You can ssh remotely into the server:

`ssh root@<ip-address>`

If you get a warning for a potential man in the middle attack after deploying you can reset the ssh keys using:

`ssh-keygen -R <ip-address>`

To view startup logs:

`cat /var/log/firstboot.log`

To view server logs:

`cd /var/www/app/srv && npm run logs`
